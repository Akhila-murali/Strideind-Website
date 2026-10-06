import React from "react";
import { BarChart3, Database, MapPin } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: "50+",
    label: "Operational Locations",
  },
  {
    icon: Database,
    value: "200+",
    label: "Connected Systems",
  },
  {
    icon: BarChart3,
    value: ">99.9%",
    label: "Data Availability",
  },
];

export default function GlobalConnectivitySection() {
  return (
    <section className="bg-transparent px-[5%] py-12 font-['Manrope'] lg:py-16">
      <div className="relative mx-auto w-full max-w-[1728px] bg-[radial-gradient(ellipse_at_58%_42%,rgba(0,125,150,0.13),transparent_68%)]">
        <div className="grid items-center gap-2 lg:grid-cols-[39%_61%] lg:gap-0">
          <div>
            <div className="flex items-center gap-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#22c4c5]">
                Global Connectivity
              </p>
            </div>

            <h2 className="mt-3 max-w-[560px] text-[clamp(28px,2.5vw,38px)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              Keep Your Operations Connected,<br /><span className="text-[#22c4c5]">Wherever They Are.</span>
            </h2>

            <p className="mt-4 max-w-[540px] text-[12px] font-light leading-[1.6] text-white/55 sm:text-[13px]">
              FutuDrill Connect enables secure and reliable access across
              distributed drilling locations, helping field teams, remote
              operations, and enterprise systems stay connected through a
              consistent data network.
            </p>

           
          </div>

          <div className="relative h-[260px] overflow-hidden sm:h-[300px] lg:-ml-24 lg:h-[350px]">
            <img
              src={
                process.env.PUBLIC_URL +
                "/Neon%20Global%20Connectivity%20Map.png?v=20261001-2"
              }
              alt="Global connectivity network map"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 78% 74% at center, #000 58%, rgba(0,0,0,.92) 70%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 78% 74% at center, #000 58%, rgba(0,0,0,.92) 70%, transparent 100%)",
              }}
              className="h-full w-full scale-[1.2] object-contain object-center opacity-100 mix-blend-lighten"
            />
          </div>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              className="relative flex min-h-[86px] items-center overflow-hidden rounded-[7px] border border-[#087b89] bg-[#03151b]/75 px-5 py-3"
              key={label}
            >
              <Icon
                aria-hidden="true"
                className="h-7 w-7 shrink-0 text-[#22dce5]"
                strokeWidth={1.7}
              />
              <div className="ml-5 border-l border-white/10 pl-5">
                <strong className="block text-[clamp(22px,2vw,30px)] font-bold leading-none text-[#25deeb]">
                  {value}
                </strong>
                <span className="mt-2 block text-[10px] font-normal text-white/55 sm:text-[12px]">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
