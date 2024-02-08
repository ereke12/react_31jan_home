import React from "react";
import { PhotosType } from "../types"

type ItemType = {
    item: PhotosType;
    onDeleteClick: () => void;
}

export const PhotosItem: React.FC<ItemType> = ({item, onDeleteClick}) =>{
    return <>
        <li>{item.albumId}</li>
        <li>{item.id}</li>
        <li>{item.title}</li>
        <img src={item.url} />
        <img src={item.thumbnailUrl} />
        <button onClick={() => onDeleteClick()}>Delete</button>
    </>
}