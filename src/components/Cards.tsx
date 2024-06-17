import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Cards() {
  return (
    <Card className="sm:col-span-2 w-full min-h-[15.8rem]  ">
      <CardHeader className="pb-3">
        <CardTitle>Proyect Title</CardTitle>
        <CardDescription className="text-balance leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et felis fringilla, fermentum dui sit amet, lacinia magna. Phasellus est diam, scelerisque id purus eu, rhoncus auctor mauris. Praesent pulvinar purus


        </CardDescription>
      </CardHeader>
   
    </Card>
  )
}
