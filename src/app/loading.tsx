export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Loading">
      <section className="page-hero skeleton-hero">
        <div className="stage-container">
          <span className="skeleton skeleton-line" style={{ width: "120px" }} />
          <span className="skeleton skeleton-title" style={{ width: "min(640px, 90%)" }} />
          <span className="skeleton skeleton-title" style={{ width: "min(420px, 70%)" }} />
          <span className="skeleton skeleton-line" style={{ width: "min(520px, 80%)", marginTop: "24px" }} />
        </div>
      </section>
      <section className="page-section">
        <div className="stage-container skeleton-rows">
          {[0, 1, 2, 3].map((i) => (
            <div className="skeleton-row" key={i}>
              <span className="skeleton skeleton-line" style={{ width: "72px" }} />
              <div>
                <span className="skeleton skeleton-line skeleton-line-lg" style={{ width: "min(460px, 85%)" }} />
                <span className="skeleton skeleton-line" style={{ width: "min(620px, 95%)" }} />
                <span className="skeleton skeleton-line" style={{ width: "min(380px, 60%)" }} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
