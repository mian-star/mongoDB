// console.log('abubakar mukhtar');
import {Product} from '../../../lib/modal/scme'
import {connectionSrt} from '../../../lib/db';
import mongoose from "mongoose";
import { NextResponse } from "next/server";

   export async function GET(request){
      // console.log(connectionSrt)
      await mongoose.connect(connectionSrt)

      const data = await Product.find();
      console.log(data);

      return NextResponse.json({data},{status: 200})
   }

export async function POST(request){
  
   let paylod = await request.json();

   await mongoose.connect(connectionSrt)
   let newData = new Product(paylod)

   let result = await newData.save();

   return NextResponse.json({result,success:true},{status:200})
}