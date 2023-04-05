import { Component, Input } from '@angular/core';

@Component({
  selector: 'nodes',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css',]
})
export class NodeComponent {
  @Input() node: any;
}
