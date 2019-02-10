import { Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from './../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
  quoteCollection:{category:string,quotes:Quote[],icon:string};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alrtCtrl:AlertController,private quotesService:QuotesService) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }
ngOnInit(){
this.quoteCollection=this.navParams.data;
}

onAddToFavorite(selectedQuote:Quote){
const alert=this.alrtCtrl.create({
  title:'Add Quote',
  subTitle:'Are you Sure?',
  message:'Are you sure you want to Add the Quote?',
buttons:[
  {
  text:'Yes go ahead',
  handler:()=>{
    this.quotesService.addQuoteToFavorites(selectedQuote);
  }
  },
  {
   text:'No,I changed my mind!',
   role:'cancel',
   handler:()=>{
     console.log('Cancelled!');
   }
  }
]
});
alert.present();
}


isFavorite(quote:Quote){
  return this.quotesService.isFavoriteQuote(quote);
}
onRemoveFavorite(quote:Quote){
return this.quotesService.removeQuoteFromFavorites(quote);
}

}
