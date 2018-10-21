export class Quote {
  public showDetails:boolean;
constructor(public quoteID:number, public description:string, public author:string, public userName:string, public completeDate:Date, public upvote:number, public downvote:number){
  this.showDetails=false
  this.upvote=0
  this.downvote=0
}
}
