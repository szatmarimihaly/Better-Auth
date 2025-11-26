


export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative flex flex-col items-center h-screen"
    >
      {/* Blurred background layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at bottom, #000000 40%, #3b3a3a 50%, #000 80%)`,
          filter: `blur(10px)`
        }}
      />
      {children}
    </section>
  );
}