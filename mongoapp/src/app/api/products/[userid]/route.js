import { NextResponse } from "next/server";
import {Product} from '../../../../lib/modal/scme'
import { connectionSrt } from "../../../../lib/db";
import mongoose from "mongoose";

export async function PUT(request,{params}){
    const userId = params.userid
    const filter = {_id: userId}
    await mongoose.connect(connectionSrt)
    const paylod = await request.json();

    const result = await Product.findOneAndUpdate(filter,paylod)
    return NextResponse.json({result,success : true},{status:200})
}

// show single page users:

export async function GET(request , {params}){
    const userId = params.userid;
    const filter = {_id : userId}

    await mongoose.connect(connectionSrt)
    const newData = await Product.findById(filter)

    return NextResponse.json({newData,success : true},{status: 200})
}
// export function GET(request,{params}){
//     // console.log(content.params.id);
//     const newData = Data.filter((ele)=> ele.id == params.id)
//     return NextResponse.json(newData.length == 0 ? 'Error Data cannot be get... ' : newData , { status : 200} )
// }

export async function DELETE(request,{params}){
    const userId = params.userid;
    const filter = {_id: userId}

     await mongoose.connect(connectionSrt)
     const result = await Product.deleteOne(filter)
     
    return NextResponse.json({result,success:true},{status:200})

}