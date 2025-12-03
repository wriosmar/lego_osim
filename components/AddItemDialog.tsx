'use client'

import React from "react"
import { InventoryItem } from "@/lib/types";

type AddItemDialogProps = {
    children: React.ReactNode;
    onAddItem: (item: Omit<InventoryItem, 'id'>) => void;
}

export default function AddItemDialog({ children, onAddItem }: AddItemDialogProps) {
    return (
        <header>
            <h1>
                Add Item
            </h1>
        </header>
    )
}