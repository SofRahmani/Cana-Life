"use client";
import { Card, CardBody } from "@nextui-org/card";
import { useEffect, useState } from 'react'

export interface TagProps {
  tagName: string;
}

export default function Tag({ tagName }: TagProps) {

  const [color, setColor] = useState('')
  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    switch (tagName) {
      case 'Canada':
        setColor('bg-red-500')
        setTextColor('text-white')
        break;
      case 'Québec':
        setColor('bg-blue-500')
        setTextColor('text-white')
        break;
      case 'Montréal':
        setColor('bg-yellow-500')
        setTextColor('text-black')
        break;
      case 'Toronto':
        setColor('bg-blue-500')
        setTextColor('text-white')
        break;
      case 'Vancouver':
        setColor('bg-green-500')
        setTextColor('text-white')
        break;
      case 'Calgary':
        setColor('bg-red-400')
        setTextColor('text-black')
        break;
      case 'Ottawa':
        setColor('bg-red-500')
        setTextColor('text-white')
        break;
      case 'Edmonton':
        setColor('bg-blue-500')
        setTextColor('text-white')
        break;
      case 'Winnipeg':
        setColor('bg-yellow-500')
        setTextColor('text-black')
        break;
      case 'Québec':
        setColor('bg-blue-500')
        setTextColor('text-white')
        break;
      case 'Saskatoon':
        setColor('bg-green-500')
        setTextColor('text-white')
        break;
      case 'Halifax':
        setColor('bg-red-500')
        setTextColor('text-white')
        break;
      case 'Victoria':
        setColor('bg-blue-500')
        setTextColor('text-white')
        break;
      case 'Regina':
        setColor('bg-yellow-500')
        setTextColor('text-black')
        break;
      case 'St. John’s':
        setColor('bg-blue-500')
        setTextColor('text-white')
        break;
      case 'Iqaluit':
        setColor('bg-green-500')
        setTextColor('text-white')
        break;
      case 'Yellowknife':
        setColor('bg-red-500')
        setTextColor('text-white')
        break;
      case 'Whitehorse':
        setColor('bg-blue-500')
        setTextColor('text-white')
        break;
      case 'Charlottetown':
        setColor('bg-yellow-500')
        setTextColor('text-black')
        break;
      case 'Fredericton':
        setColor('bg-blue-500')
        setTextColor('text-white')
        break;
      default:
        setColor('')
        setTextColor('')
        break;
    }
  }, [tagName])

  return (
    <Card className={` max-w-fit shadow-md ${color} md:cursor-pointer md:hover:scale-105 `}>
      <CardBody>
        <p className={` ${textColor} `}>{tagName}</p>
      </CardBody>
    </Card>
  );
}
