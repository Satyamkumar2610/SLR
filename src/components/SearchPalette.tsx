"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { search, suggested, type SearchEntry } from "@/lib/search";

const OPEN_EVENT = "slr:open-search";

export function openSearch() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const subscribeNoop = () => () => {};
export function useIsMac() {
  return useSyncExternalStore(
    subscribeNoop,
    () => /Mac|iPhone|iPad/.test(navigator.platform),
    () => true
  );
}

export function SearchTrigger({ variant = "nav" }: { variant?: "nav" | "drawer" | "inline" }) {
  const isMac = useIsMac();
  return (
    <button type="button" className={`search-trigger search-trigger-${variant}`} onClick={openSearch} aria-label="Search the site">
      <SearchIcon />
      <span className="search-trigger-label">Search</span>
      {variant === "nav" && <kbd className="search-kbd">{isMac ? "⌘K" : "Ctrl K"}</kbd>}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg className="search-icon" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.75" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 13l4.25 4.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function highlight(text: string, query: string) {
  const terms = query.trim().split(/\s+/).filter((t) => t.length > 1);
  if (!terms.length) return text;
  const re = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return text.split(re).map((part, i) => (i % 2 ? <mark key={i}>{part}</mark> : part));
}

export default function SearchPalette() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results: SearchEntry[] = useMemo(() => (query.trim() ? search(query) : suggested), [query]);

  useEffect(() => {
    const open = () => {
      const dialog = dialogRef.current;
      if (!dialog || dialog.open) return;
      setQuery("");
      setActive(0);
      dialog.showModal();
      inputRef.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing = !!target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName));
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialogRef.current?.open) dialogRef.current.close();
        else open();
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener(OPEN_EVENT, open);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_EVENT, open);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const close = () => dialogRef.current?.close();

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const entry = results[active];
      if (entry) {
        close();
        router.push(entry.href);
      }
    }
  };

  const hasQuery = query.trim().length > 0;

  return (
    <dialog
      ref={dialogRef}
      className="search-dialog"
      aria-label="Search the SLR Centre"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="search-panel">
        <div className="search-input-row">
          <SearchIcon />
          <input
            ref={inputRef}
            className="search-input"
            type="search"
            placeholder="Search research, sectors, geographies, insights…"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls={listId}
            aria-activedescendant={results.length ? `${listId}-${active}` : undefined}
            aria-autocomplete="list"
            autoComplete="off"
            spellCheck={false}
          />
          <button type="button" className="search-close" onClick={close} aria-label="Close search">
            Esc
          </button>
        </div>

        <div className="search-body">
          <span className="search-group-label" aria-live="polite">
            {hasQuery ? (results.length ? `${results.length} result${results.length === 1 ? "" : "s"}` : "No results") : "Suggested"}
          </span>

          {hasQuery && !results.length ? (
            <p className="search-empty">
              Nothing matches “{query}”. Try a sector, a region, or a topic such as <em>sanctions</em> or <em>semiconductors</em>.
            </p>
          ) : (
            <ul className="search-results" id={listId} role="listbox" ref={listRef} key={query}>
              {results.map((entry, i) => (
                <li key={`${entry.kind}-${entry.href}-${entry.title}`} role="presentation" style={{ "--i": Math.min(i, 8) } as React.CSSProperties}>
                  <Link
                    href={entry.href}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={i === active}
                    tabIndex={-1}
                    data-index={i}
                    className={`search-result ${i === active ? "is-active" : ""}`}
                    onMouseMove={() => setActive(i)}
                    onClick={close}
                  >
                    <span className="search-result-kind">{entry.kind}</span>
                    <span className="search-result-text">
                      <span className="search-result-title">{highlight(entry.title, query)}</span>
                      <span className="search-result-desc">{entry.description}</span>
                    </span>
                    <span className="search-result-go" aria-hidden="true">↵</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="search-footer" aria-hidden="true">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </dialog>
  );
}
