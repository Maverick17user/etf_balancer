import React from 'react'
import SankeyChart from './components/charts/SankeyChart'
import SunburstChart from './components/charts/SunburstChart'
import SelectingArea from './components/SelectingArea'

export default function BalancerPage() {
    return (
        <div className="App App-header font-mono bg-gradient-to-r from-pink-100 to-blue-200">
            <div>
                <p className="text-blue-400 text-2xl mb-10">
                    <b>ETF • BALANCER</b>
                </p>
            </div>
            <SelectingArea />
            <div className="flex mt-20">
                <div className="flex-1 card" >
                    <SunburstChart />
                </div>
                <div className="flex-1 card ml-4">
                    <SankeyChart />
                </div>
            </div>
        </div>
    )
}
