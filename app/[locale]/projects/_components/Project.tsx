import Slider from "./Slider"
import { cn } from "@/lib/utils"

export default function Project({ title, description, images, left }: { title: string, description: string, images: string[], left: boolean }) {
    return (
        <div className={cn(`grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6 lg:gap-0 max-[1024px]:flex max-[1024px]:flex-col-reverse`, { "lg:grid-cols-[30%_70%]": left })}>
            <Slider 
                images={images} 
                className={cn("border-b-3 border-[#EAE9E5] lg:border-b-0", { 
                    "lg:order-2 lg:border-l-3": left, 
                    "lg:order-1 lg:border-r-3": !left 
                })} 
            />
            <div className={cn("flex flex-col w-full gap-3 sm:gap-4 lg:gap-5", { "lg:order-1": left, "lg:order-2": !left })}>
                <p className={cn(`font-bricolage text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold border-b-3 border-[#EAE9E5] pb-3 sm:pb-4 lg:pb-5`, {
                    "lg:pr-10": left, 
                    "lg:pl-10": !left
                })}>
                    {title}
                </p>
                <p className={cn(`font-inter text-sm sm:text-base max-[1024px]:hidden`, {
                    "lg:pr-10": left, 
                    "lg:pl-10": !left
                })}>
                    {description}
                </p>
            </div>
        </div>
    )
}