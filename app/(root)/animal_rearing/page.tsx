'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Mock data for video cards with actual YouTube video IDs
const videoData = [
  {
    id: 1,
    title: "Cattle Feeding Techniques",
    description: "Learn about optimal feeding practices for healthy cattle.",
    thumbnail: "/img/thumbnails/pexels-pixabay-51311.jpg?height=200&width=300",
    videoId: "hN_EAG_zyIo"
  },
  {
    id: 2,
    title: "Poultry Management",
    description: "Essential tips for managing a successful poultry farm.",
    thumbnail: "/img/thumbnails/pexels-magda-ehlers-pexels-1300375.jpg?height=200&width=300",
    videoId: "pMbS8h1b5nY"
  },
  {
    id: 3,
    title: "Pig Breeding Basics",
    description: "A comprehensive guide to pig breeding for beginners.",
    thumbnail: "/img/thumbnails/pexels-nc-farm-bureau-mark-2737171.jpg?height=200&width=300",
    videoId: "ZiNAneguWpE&ab"
  },
  {
    id: 4,
    title: "Sheep Shearing Techniques",
    description: "Master the art of efficient and safe sheep shearing.",
    thumbnail: "/img/thumbnails/pexels-elifinatlasi-66733727-15365747.jpg?height=200&width=300",
    videoId: "5LExaXOJ2bY&ab"
  },
  {
    id: 5,
    title: "Goat Health Management",
    description: "Learn to identify and treat common health issues in goats.",
    thumbnail: "/img/thumbnails/pexels-mtyutina-1228438.jpg?height=200&width=300",
    videoId: "B7Xv4J5xfVg"
  },
  {
    id: 6,
    title: "Sustainable Fish Farming",
    description: "Explore eco-friendly practices for profitable fish farming.",
    thumbnail: "/img/thumbnails/pexels-enginakyurt-10112455.jpg?height=200&width=300",
    videoId: "GrPIep8WHD0"
  }
]





const VideoCard = ({ video, onClick }: { video: typeof videoData[0], onClick: () => void }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="cursor-pointer overflow-hidden shadow-lg transition duration-300 hover:shadow-xl" onClick={onClick}>
      <CardContent className="p-0">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
          <p className="text-sm text-gray-600">{video.description}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

export default function AnimalRearing() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videoData[0] | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <header className="bg-green-700 text-white py-12 px-4 md:px-6">
        <div className="container mx-auto text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Animal Rearing</h1>
          <p className="text-xl">Discover expert techniques and tips for successful animal husbandry.</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>
      </main>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
            <DialogDescription>{selectedVideo?.description}</DialogDescription>
          </DialogHeader>
          <div className="aspect-video rounded-lg overflow-hidden">
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
            className="mt-4 flex items-center gap-2"
          >
            <X className="h-4 w-4" /> Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
