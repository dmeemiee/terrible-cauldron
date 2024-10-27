'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Gem, HelpCircle, ChevronRight } from 'lucide-react'

export default function NFTClaimPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const connectWallet = () => {
    // Simulating wallet connection
    setTimeout(() => {
      setIsWalletConnected(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Gem className="h-8 w-8" />
          <span className="text-2xl font-bold">NFT Realm</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-purple-300">Home</a></li>
            <li><a href="#" className="hover:text-purple-300">Gallery</a></li>
            <li><a href="#" className="hover:text-purple-300">About</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Claim Your Exclusive NFT</h1>
          <p className="text-xl mb-8">Connect your wallet and enter the world of unique digital art.</p>
          <Button 
            size="lg" 
            onClick={connectWallet}
            disabled={isWalletConnected}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isWalletConnected ? (
              <span className="flex items-center">
                Wallet Connected <Wallet className="ml-2 h-5 w-5" />
              </span>
            ) : (
              <span className="flex items-center">
                Connect Wallet <Wallet className="ml-2 h-5 w-5" />
              </span>
            )}
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Gem className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mystic Gem #{item}</h3>
                <p className="text-purple-200">A rare and powerful NFT with mystical properties.</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Connect Wallet", icon: <Wallet className="h-10 w-10 mb-4" /> },
              { title: "Choose Your NFT", icon: <Gem className="h-10 w-10 mb-4" /> },
              { title: "Claim & Enjoy", icon: <ChevronRight className="h-10 w-10 mb-4" /> }
            ].map((step, index) => (
              <div key={index} className="text-center">
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-purple-200">Step {index + 1} of the claiming process.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
          <p className="text-xl mb-8">Our support team is here to assist you with any questions.</p>
          <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
            <HelpCircle className="mr-2 h-5 w-5" />
            Get Support
          </Button>
        </section>
      </main>

      <footer className="bg-purple-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 NFT Realm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}