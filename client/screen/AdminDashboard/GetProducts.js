import { View, Text } from 'react-native'
import React, { useState } from 'react'
import axios   from 'axios';
import { useEffect } from 'react';

const GetProducts = () => {
    const [post, setPost] = useState([])
    console.log("Total Pos",   post)

    const getUserPost = async () => {
        try {
            const {data} = await axios.get("http://192.168.43.69:8000/api/v1/product/get-user-post")
            setPost(data?.userProducts)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getUserPost()
    }, [])
   
  return (
    <View>
      <Text>Get Products</Text>
    </View>
  )
}

export default GetProducts