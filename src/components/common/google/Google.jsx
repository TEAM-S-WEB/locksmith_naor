import React from 'react'
import { GoogleTagManager } from "@next/third-parties/google";

const Google = () => {
  return (
    <div>
      <GoogleTagManager googleTagId="GTM-BMCWFFCB1Y" />
      {/* <GoogleAnalytics googleAnalyticsId="UA-XXXXXX" /> */}
    </div>
  )
}

export default Google