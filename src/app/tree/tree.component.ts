import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api'


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  files: TreeNode[];

  nodes: TreeNode[];

  constructor(private nodevar: NodeService) { }

  ngOnInit() {


  this.nodevar.getFiles().subscribe(
    data =>{
      this.files = data;
    },
    error =>{
      console.log(error.errormessage);
    }
  )

  }

  loadNode(event) {
    if(event.node) {
      console.log("inside");
        //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
        //this.nodevar.getLazyFiles().then(nodes => event.node.children = nodes);
        this.nodevar.getFiles().subscribe(
          data =>{
            this.nodes = data;
          },
          error =>{
            console.log(error.errormessage);
          }
        )   
    }
}

}
