import * as React from "react"
import Link from "next/link"

import {NavItem} from "@/types/nav"
import {siteConfig} from "@/config/site"
import {cn} from "@/lib/utils"
import {Icons} from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
          <svg width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M432.795 877.339C432.795 951.6 433.499 1013.07 434.359 1013.93C435.22 1014.79 469.647 1015.22 510.861 1014.89L585.798 1014.28L586.985 742.354L779.093 934.769L887.176 826.418L785.954 724.871C730.282 669.023 677.207 617.608 668.011 610.622C574.083 539.259 445.661 539.259 351.733 610.622C342.537 617.608 289.462 669.023 233.789 724.871L132.568 826.418L240.65 934.769L432.795 742.318V877.339Z"
                  className="fill-primary"/>
              <path
                  d="M222.869 243.629C158.578 206.499 105.013 176.376 103.836 176.69C102.659 177.005 85.0729 206.613 64.7551 242.485L27.8113 307.707L262.635 444.698L0 514.916L39.7627 662.724L178.287 625.808C254.473 605.503 325.522 585.231 336.169 580.757C444.915 535.068 509.126 423.816 494.308 306.763C492.857 295.303 474.883 223.617 454.369 147.463L417.067 9L269.222 48.4574L339.762 311.14L222.869 243.629Z"
                  className="fill-black dark:fill-white"/>
              <path
                  d="M800.131 243.629C864.422 206.499 917.987 176.376 919.164 176.69C920.341 177.005 937.927 206.613 958.245 242.485L995.189 307.707L760.365 444.699L1023 514.916L983.237 662.724L844.713 625.809C768.526 605.503 697.478 585.231 686.831 580.758C578.085 535.069 513.874 423.816 528.692 306.763C530.143 295.303 548.117 223.617 568.631 147.463L605.933 9.00011L753.778 48.4575L683.238 311.14L800.131 243.629Z"
                  className="fill-black dark:fill-white"/>
          </svg>
          <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
        {items?.length ? (
            <nav className="flex gap-6">
                {items?.map(
                    (item, index) =>
                        item.href && (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    "flex items-center text-sm font-medium text-muted-foreground",
                                    item.disabled && "cursor-not-allowed opacity-80"
                                )}
                            >
                                {item.title}
                            </Link>
                        )
                )}
            </nav>
        ) : null}
    </div>
  )
}
