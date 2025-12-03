'use client';

import Image from "next/image";

import { useState } from "react";
import { InventoryItem } from "@/lib/types";
import { Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import Header from '@/components/Header';
import AddItemDialog from '@/components/AddItemDialog';

export default function Home() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddItem = (newItem: Omit<InventoryItem, 'id'>) => {
    const newId = (Math.max(...inventory.map(item => parseInt(item.id, 10)), 0) + 1).toString();
    setInventory([{ ...newItem, id: newId }, ...inventory]);
  }

  return (
    <div>
      <Header />
      <Search />
      <Input 
        placeholder="Search by name or setID..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10"
        />
      <div>
        <AddItemDialog onAddItem={handleAddItem}>
        <Button>
          <Plus />
          Add Item
        </Button>
        </AddItemDialog>
      </div>
    </div>
  );
}
