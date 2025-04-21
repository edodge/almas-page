import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function AlmaPage() {
  return (
    <main className="min-h-screen bg-muted flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Alma&apos;s Page
          </h1>
        </div>

        {/* Silly Jokes Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Alma&apos;s Silly Jokes</CardTitle>
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
              Alma&apos;s Pictures of Bunnies 🐰
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

        {/* Story Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Alma&apos;s Story about Valentine and the Witch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed">
            <p>
              Once upon a time there was a little girl that lived in the woods.
              Her name was Valentine. She saw a little cabin in the woods so she
              went inside the little cabin. When she was inside she saw a witch
              that was friendly. She let her inside. After that she said,
              &quot;do you want to make a potion with me?&quot; Valentine tasted
              it and she said, &quot;Yummy!&quot; The witch said, &quot;do you
              want to go play?&quot; and Valentine said, &quot;do you want to
              come to my house?&quot; and the witch said, &quot;sure but is
              there a park there?&quot; So they went to Valentine&apos;s house.
              The end.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
