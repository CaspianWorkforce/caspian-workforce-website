import Image from "next/image";

export default function Globe() {
  return (
    <div className="hero-globe-wrap" aria-hidden="true">
      <div className="hero-globe-glow" />

      <Image
        src="/hero-globe.png"
        alt=""
        width={816}
        height={834}
        priority
        className="hero-globe-image"
      />
    </div>
  );
}
