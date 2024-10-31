'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Video data for Disease Control (Animal and Plant)
const diseaseControlVideos = [
  {
    id: 1,
    title: "Common Animal Diseases & Prevention",
    description: "Learn about common diseases affecting livestock and prevention techniques.",
    thumbnail: "/img/thumbnails/pexels-ermelinda-maglione-1106070-6604130.jpg",
    videoId: "X1oCMLvkkDw"
  },
  {
    id: 2,
    title: "Plant Disease Management Basics",
    description: "An introductory guide to managing diseases in various crops.",
    thumbnail: "/img/thumbnails/pexels-didsss-12264567.jpg",
    videoId: "3WBGzCwB4Z0"
  },
  {
    id: 3,
    title: "Poultry Disease Prevention",
    description: "Effective techniques to control and prevent diseases in poultry farms.",
    thumbnail: "/img/thumbnails/pexels-kirsten-buhne-682055-1562389.jpg",
    videoId: "8Q9MhU7sZmE"
  }
]

const VideoCard = ({ video, onClick }: { video: typeof diseaseControlVideos[0], onClick: () => void }) => (
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

export default function DiseaseControl() {
  const [selectedVideo, setSelectedVideo] = useState<typeof diseaseControlVideos[0] | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 via-green-50 to-green-100">
      <header className="bg-green-700 text-white py-16 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Disease Control</h1>
          <p className="text-xl">Effective strategies for managing diseases in plants and animals.</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-6 space-y-12">
        {/* Grid of Video Cards */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-green-800">Explore Disease Control Techniques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseaseControlVideos.map((video) => (
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
            Access our comprehensive resources on managing plant and animal diseases effectively.
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
