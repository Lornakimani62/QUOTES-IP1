import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  userQuotes = [
    new Quote(1, 'It is better to lead from behind and to put others in front,', '-	Nelson Mandela','Lorna Kimani',new Date(2017,7,14), 0, 0),
    new Quote(2, 'If you would not be forgotten, as soon as you are dead and rotten, either write things worth reading, or do things worth the writing.', '-Benjamin Franklin','Lorna Kimani',new Date(2017,7,14), 0, 0),
    new Quote(3, 'The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.', '-Ronald Reagan','Lorna Kimani',new Date(2017,7,14), 0, 0),
  ]

  addNewQuote(quote){
      let quoteLength = this.userQuotes.length;
      quote.quoteID=quoteLength+1;
      quote.dateAdded = new Date(quote.completeDate)
      this.userQuotes.push(quote)

    }

    toogleDetails(index){
        this.userQuotes[index].showDetails = !this.userQuotes[index].showDetails;
    }


    deleteQuote(isComplete,index){
          if (isComplete){
              let toDelete=confirm(`Are you sure you want to delete quote submitted by ${this.userQuotes[index].userName}`)

              if(toDelete){
                  this.userQuotes.splice(index,1)
              }
          }
        }


  constructor() { }

  ngOnInit() {
  }

}
