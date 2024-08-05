import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Heart, Info } from "lucide-react";

const Index = () => {
  const [likeCount, setLikeCount] = useState(0);
  const popularBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="bg-blue-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Discover the World of Dogs</h1>
          <p className="text-xl mb-8">Explore, learn, and fall in love with man's best friend</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Get Started
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="mr-2" /> Man's Best Friend
                </CardTitle>
                <CardDescription>Learn about our canine companions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Dogs have been domesticated for thousands of years and are known for their loyalty, 
                  companionship, and diverse breeds. They come in various sizes, shapes, and temperaments, 
                  making them suitable for different lifestyles and purposes.
                </p>
                <p>
                  From working dogs to family pets, these amazing animals have played significant roles 
                  in human society, including assisting in hunting, herding, protection, and even therapy.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="breeds">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Dog className="mr-2" /> Popular Dog Breeds
                </CardTitle>
                <CardDescription>Some of the most beloved dog breeds worldwide</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {popularBreeds.map((breed, index) => (
                    <li key={index} className="flex items-center">
                      <Dog className="mr-2 h-5 w-5 text-blue-500" />
                      {breed}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="gallery">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img 
                  key={i}
                  src={`https://source.unsplash.com/random/300x300?dog=${i}`}
                  alt={`Dog ${i}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Love Dogs?</span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setLikeCount(prev => prev + 1)}
              >
                <Heart className={`h-4 w-4 ${likeCount > 0 ? 'text-red-500 fill-red-500' : ''}`} />
              </Button>
            </CardTitle>
            <CardDescription>Show your appreciation!</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-2xl font-bold">{likeCount} {likeCount === 1 ? 'person loves' : 'people love'} dogs!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
