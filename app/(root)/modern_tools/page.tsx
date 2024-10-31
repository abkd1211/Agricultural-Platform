'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Video data for Modern Tools in Farming
const modernToolsVideos = [
  {
    id: 1,
    title: "Introduction to Smart Farming",
    description: "Overview of smart farming and how technology is revolutionizing agriculture.",
    thumbnail: "/img/thumbnails/pexels-thisisengineering-3912509.jpg",
    videoId: "FtF65G6O_kQ"
  },
  {
    id: 2,
    title: "Using Drones in Agriculture",
    description: "Learn how drones are used for monitoring and crop health analysis.",
    thumbnail: "/img/thumbnails/pexels-tahir-osman-109306362-18053534.jpg",
    videoId: "6X4kWH3ZrrI"
  },
  {
    id: 3,
    title: "Automated Machinery in Harvesting",
    description: "An overview of automated harvesters and their benefits.",
    thumbnail: "/img/thumbnails/pexels-wolfgang-weiser-467045605-22498813.jpg",
    videoId: "KxRhd3s9Pso"
  }
 
]

const VideoCard = ({ video, onClick }: { video: typeof modernToolsVideos[0], onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="cursor-pointer overflow-hidden shadow-lg transform transition-all hover:scale-105" onClick={onClick}>
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

export default function ModernTools() {
  const [selectedVideo, setSelectedVideo] = useState<typeof modernToolsVideos[0] | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-200 to-gray-100">
      <header className="bg-green-700 text-white py-16 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Modern Tools</h1>
          <p className="text-xl">Explore cutting-edge tools transforming the agriculture industry.</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-6 space-y-12">
        {/* Grid of Video Cards */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Explore Modern Agricultural Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modernToolsVideos.map((video) => (
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
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Further Resources & Insights</h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover more about technology in agriculture with our curated resources.
          </p>
          <div className="flex space-x-6">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              View Resources
            </Button>
            <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
              Start Learning
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
