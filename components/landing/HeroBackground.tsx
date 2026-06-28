export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(180,60,10,.6) 0%, rgba(80,20,5,.3) 40%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0A0A0A)]" />
    </>
  );
}