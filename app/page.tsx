import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AlmaPage() {
  return (
    <main className="min-h-screen bg-muted flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Alma's Website</h1>
        </div>

        {/* Silly Jokes Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Alma's Silly Jokes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Q:</strong> Why did the booger cross the road?
              <br />
              <strong>A:</strong> Because he wanted to eat a chipmunk.
            </p>
            <p>
              <strong>Q:</strong> Why did the chipmunk cross the car?
              <br />
              <strong>A:</strong> Because it wanted to get smashed by a car.
            </p>
            <p>
              <strong>Q:</strong> Why did the booger get pooped out of the bird?
              <br />
              <strong>A:</strong> Because he landed on a microphone.
            </p>
            <p>
              <strong>Bonus:</strong> Booger landed on the speaker and after it
              landed it pooped.
            </p>
          </CardContent>
        </Card>

        {/* Bunnies Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Alma's Pictures of Bunnies 🐰
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Image
              src="/bunny1.jpeg"
              alt="Bunny 1"
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
            <Image
              src="/bunny2.jpeg"
              alt="Bunny 2"
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
            <Image
              src="/bunny3.jpeg"
              alt="Bunny 3"
              width={300}
              height={200}
              className="rounded-md object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
