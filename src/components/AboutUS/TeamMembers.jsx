import Image from 'next/image';
import React from 'react';

const TeamMembers = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Meet the brains</h2>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-5 gap-x-0">





{
    people.map(person=>(
        <div  key={person?.name}>
            <div>
           

                <Image  placeholder='blur' blurDataURL='/loadingImg.gif' className="object-cover mx-auto rounded-lg w-28 h-28"  src={person.image} alt={person.name} width={100} height={100}/>
                <p className="mt-8 text-lg font-semibold leading-tight text-black">{person.name}</p>
                <p className="mt-1 text-base leading-tight text-gray-600">{person.role}</p>
                </div>
        
           
            </div>


    ))
}







        </div>
    </div>
</section>

    );
};

export default TeamMembers;



const people=[
    {
        name:"Takibul Hasan mirza",
        image:"/ceo.png",
        role:"Founder / CEO"
    },
    {
        name:"Bill Gates",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg/800px-Bill_Gates_-_2023_-_P062021-967902_%28cropped%29.jpg",
        role:"Former CEO of Microsof"
    },
    {
        name:"Jack Ma",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyQHsZCtQkp6vF4igZjPuWg4wfgkX-jPMsg&s",
        role:"Chinese business magnate and investor"
    },
    {
        name:"jeff bezos",
        image:"https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
        role:"Executive chairman of Amazon"
    },
    {
        name:"Elon Musk",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
        role:"CEO of Tesla Motors"
    },
    {
        name:"Robert Downey Jr.",
        image:"https://pm1.aminoapps.com/6896/c55cbd01984ffa23da8dca88bf81476f071c925er1-540-694v2_00.jpg",
        role:"Iron Man"
    },
    {
        name:"Darrell Steward",
        image:"https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg",
        role:"CTO"
    },
    {
        name:"Bessie Cooper",
        image:"https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg",
        role:"CMO"
    },
    {
        name:"Arlene McCoy",
        image:"https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg",
        role:"Senior Developer"
    },
    {
        name:"Brooklyn Simmons",
        image:"https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-5.jpg",
        role:"Product Designer"
    },
    {
        name:"Dianne Russell",
        image:"https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-7.jpg",
        role:"Front-end Developer"
    },
    {
        name:"Eleanor Pena",
        image:"https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-9.jpg",
        role:"UI Designer"
    },
]