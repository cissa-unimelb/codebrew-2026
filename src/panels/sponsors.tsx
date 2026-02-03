import AirwallexIcon from "@/assets/sponsors/airwallex.png"
import IMCIcon from "@/assets/sponsors/imc.png"
import JaneStreetIcon from "@/assets/sponsors/jane-street.png"

import AtlassianIcon from "@/assets/sponsors/atlassian.png"
import TalariaIcon from "@/assets/sponsors/talaria.png"
import SkandIcon from "@/assets/sponsors/skand.png"
import OptiverIcon from "@/assets/sponsors/optiver.png"
import SIGIcon from "@/assets/sponsors/sig.png"

import SuncorpIcon from "@/assets/sponsors/suncorp.png"
import CitadelIcon from "@/assets/sponsors/citadel.png"
import KPMGIcon from "@/assets/sponsors/kpmg.png"
import ShineIcon from "@/assets/sponsors/shine.png"

import CommbankIcon from "@/assets/sponsors/commbank.png"
import REAIcon from "@/assets/sponsors/rea.png"
import VanguardIcon from "@/assets/sponsors/vanguard.png"
import XeroIcon from "@/assets/sponsors/xero.png"
import QRTIcon from "@/assets/sponsors/qrt.png"
import EYIcon from "@/assets/sponsors/ey.png"

const tiers = [
    {
      name: 'Diamond',
      logos: [AirwallexIcon, IMCIcon, JaneStreetIcon],
    },
    {
      name: 'Platinum',
      logos: [AtlassianIcon, TalariaIcon, SkandIcon, OptiverIcon, SIGIcon],
    },
    {
      name: 'Gold',
      logos: [SuncorpIcon, CitadelIcon, KPMGIcon, ShineIcon],
    },
    {
      name: 'Silver',
      logos: [CommbankIcon, REAIcon, VanguardIcon, XeroIcon, QRTIcon, EYIcon],
    },
  ];
  
  export default function SponsorsPanel() {
    return (
      <div className="pt-24 py-10 px-6 bg-offblack text-white">
        <h2 className="font-abduction text-5xl text-center mb-10">Sponsors</h2>

        {tiers.map(({ name, logos }) => (
          <div key={name} className="flex flex-col sm:flex-row items-center mb-10 justify-center sm:space-x-20">
            <h3 className="font-abduction text-xl sm:text-2xl mb-6 sm:mb-0">
              {name}
            </h3>
              <div className="flex flex-wrap items-center justify-center gap-6">
              {logos.map((logo) => (
                <img src={logo} className="h-5 sm:h-8"/>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }