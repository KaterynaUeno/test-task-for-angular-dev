import { Component, input, signal, computed, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Block } from './block-builder.model';

@Component({
  selector: 'app-block-builder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './block-builder.html',
  styleUrl: './block-builder.scss',
})
export class BlockBuilderComponent implements OnChanges {
  data = input<Record<string, unknown>>({});

  blocks = signal<Block[]>([]);

  flatKeys = computed(() => Object.keys(this.data()).filter((key) => typeof this.data()[key] !== 'object'));

  ngOnChanges() {
    this.blocks.set(this.flatKeys().map((key) => ({ id: crypto.randomUUID(), selectedKey: key })));
  }

  addBlock() {
    const firstKey = this.flatKeys()[0] ?? '';
    this.blocks.update((blocks) => [...blocks, { id: crypto.randomUUID(), selectedKey: firstKey }]);
  }

  removeBlock(id: string) {
    this.blocks.update((blocks) => blocks.filter((b) => b.id !== id));
  }

  updateKey(id: string, newKey: string) {
    this.blocks.update((blocks) => blocks.map((b) => (b.id === id ? { ...b, selectedKey: newKey } : b)));
  }

  moveUp(index: number) {
    if (index === 0) return;
    this.blocks.update((blocks) => {
      const copy = [...blocks];
      [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
      return copy;
    });
  }

  moveDown(index: number) {
    this.blocks.update((blocks) => {
      if (index === blocks.length - 1) return blocks;
      const copy = [...blocks];
      [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
      return copy;
    });
  }

  getValue(key: string): unknown {
    return this.data()[key] ?? '—';
  }
}
