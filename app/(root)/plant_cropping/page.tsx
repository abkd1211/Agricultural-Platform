'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Mock data for Plant Cropping videos
const plantVideos = [
  {
    id: 1,
    title: "Organic Crop Growth",
    description: "Explore methods for sustainable organic farming.",
    thumbnail: "/img/thumbnails/pexels-enginakyurt-1435904.jpg",
    videoId: "lRyXlvIJFWI&ab"
  },
  {
    id: 2,
    title: "Maximizing Yield",
    description: "Tips to boost your crop productivity.",
    thumbnail: "/img/thumbnails/pexels-nc-farm-bureau-mark-2255800.jpg",
    videoId: "XuZ3HXj52mE"
  },
  {
    id: 3,
    title: "Efficient Irrigation",
    description: "Discover optimal irrigation techniques for crops.",
    thumbnail: "/img/thumbnails/pexels-nc-farm-bureau-mark-17765487.jpg",
    videoId: "fSxlrMRjxOA"
  },
  {
    id: 4,
    title: "Pest Management in Cropping",
    description: "Learn effective ways to control pests without harming crops.",
    thumbnail: "/img/thumbnails/pexels-dinukagunawardana-17903068.jpg",
    videoId: "WxxowPO9-1E"
  }
]

const VideoCard = ({ video, onClick }: { video: typeof plantVideos[0], onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="cursor-pointer overflow-hidden shadow-lg transition-all transform hover:scale-105" onClick={onClick}>
      <CardContent className="p-0">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 bg-white">
          <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.description}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function PlantCropping() {
  const [selectedVideo, setSelectedVideo] = useState<typeof plantVideos[0] | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-green-50 to-green-200">
      <header className="bg-green-700 text-white py-16 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Plant Cropping</h1>
          <p className="text-xl">Unlock best practices, sustainable methods, and expert tips for growing healthy crops.</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-6 space-y-12">
        {/* Grid of Video Cards */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-green-800">Explore Our Video Library</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plantVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => setSelectedVideo(video)}
              />
            ))}
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Resources & Guides</h2>
          <p className="text-lg text-gray-700 mb-6">
            Delve into our expert guides and manuals on plant cropping to maximize yield and manage crops sustainably.
          </p>
          <div className="flex space-x-6">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              View Guides
            </Button>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
              Get Started
            </Button>
          </div>
        </section>
      </main>

      {/* Video Dialog for Modal Playback */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
            <DialogDescription>{selectedVideo?.description}</DialogDescription>
          </DialogHeader>
          <div className="aspect-video">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <Button
            variant="outline"
            onClick={() => setSelectedVideo(null)}
            className="mt-4"
          >
            <X className="mr-2 h-4 w-4" /> Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
