import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { QDataService } from '../services/Qdata.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from './vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent implements OnInit {

  QuokkaTask : any[];
  catNb : number;
  QDate = new Date();
  
  Task: {title: string, hashtag: string, category: string} = {title: "", hashtag: "", category: ""};

  constructor(private qDataService: QDataService, private route: Router, private PDate : DatePipe) { }

  ngOnInit() {
    //pdfMake.vfs["assets/Merchant.ttf"] = "BASE 64 HERE";
    //window.pdfMake.vfs["Times-New-Roman-Regular.ttf"] = "BASE 64 HERE";
  }

  setTask() {
    let index : number;

    index = Math.floor(Math.random() * (this.QuokkaTask.length));
    console.log(this.QuokkaTask[index].title);
    this.Task.title = this.QuokkaTask[index].title;
    this.Task.hashtag = this.QuokkaTask[index].hashtag;
    this.Task.category = this.QuokkaTask[index].category;
  }

  generateTicket(){

    pdfMake.fonts = {
      'Roboto': {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
      },
      'Merchant Copy Doublesize': {
        normal: 'Merchant.ttf',
        bold: 'Merchant.ttf',
        italics: 'Merchant.ttf',
        bolditalics: 'Merchant.ttf'
      }
    };

    const documentDefinition = { 
      defaultStyle: {
        //font: 'Roboto'
        font: 'Merchant Copy Doublesize'
      },
      pageSize: {
        width: 330,
        height: 578
      },
      content: [
          {
            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACHCAYAAACVk4KeAAAAAXNSR0IArs4c6QAADzRJREFUeAHtnXmwHUUVxkGQfQ8gYBYqYVEooNjDlkSJhSBgySJLuYGKVqGFf4hSZRAoLRQ3LHEpBYQ/0FJUUFYjYICACCIgiAQI8iAEAdkDJIRE/X4vmee8YebeudPdM939+lR9b+b2dJ8+5+szMz3dPfNWXcW+bCaV+wo7CjsIU4RxwibCBsJy4Q1hqfCMsHAl5ml7j3C38LSQxC0DtNNEYYLwdmE9YY2VoG1eFF4QnhRoG7bOZFVLmneVnuOE9wi7CKZ6H5OOPwizhRsESEnSnAECbH9hhrDbSmyp7SDykjJzofijcL1wh7BM6FzWkgUnCxj3X4fg7PytcKSwppCkHgPcfT4uXCG8IthuI+5m5wo7C50IwfAZgUu1bef66XtedZ4jbCUkKWdgppJ/Lrwm9OPT1vE5qmua0Jrso5roL9hyoKkerpIXC9sKSVZZZXWRcLzg+u7Ur72ukw3buWwQHP2WwINGP2PaPE5Afk/YVBiLQl+cAHxUaJP3XnUtli2nCqsJVmUjaaNz2qvyro+9KPtOEd4i2BJ00c8iyLcQeLKcJEwWOOvfIWwjkEbHn5GB9QX6zjbtkLpS2U+ptwtdc19VPw+ZG5daXpLY7+l2vMoQhNuXlPUx6VYZRQf9wYJxDB3hy1YCwxZ5EGhZEDGEQTCxXUcwEfpoPGnm8bJ+MyTC8BR4Krdlf5HQTzg5uDt9sl9GD44/JBsOFR7uZ0uvQKSB5gqc+SHJEhl7uUCwMUZGAK4rhCAE7VAJOLHmCzOECwTG/0IRTrj9BeyvlKpA5Ipwo7B7Zcl0oG0GlqlC+uohypCMJhgXVhlf1Zf5vgqkIKxirZv0UIMQtrYWrhboP5dK2ZPNscr5ldLcKTEx0JwBHvg2FK4tU1G8NW+uTHQwKZAkMeCCAR5euDqOkuKt+QwdTUE4iqL0wzID50nfGkWd+VszsxQ/FYrBWSyTficGTBhgbJGp2j/nleSD7os6EHKHOO9X2vebgVkyb9SQWhaIDOLykJIkMdAGA+NUyTH5irJAPE6JoyI0nyntJwYcMDBqZigLxKMdVJRUJgZ6MTBVB0dm7QhE1hcygZ4kMdA2AwdlFRKIBOHaWULaJgZaZGBmVheBuFf2I20TAy0zMF31DU+qEIhOV9S27FiqLiwGGK0Zj8kpEMNquBitZSJlOBBZs5ckMdAVA8OByExKDOOHrIa+RrhXYLCUB7A9hFiEBcq3C68KuwoHC28VYhBeRRkWnKt67yCE9Mtk/3A/Y4U7I3+P0N6/hBB8qLJxvuw/cMSj/+/Qr+dF96pyIaWflbm1LGCHLpTtxaVsmV9stxdCDUaW4/GOTZWwguVKIaSgK7P1m5mDrIQoy+B72nWym4etfrKbMrwh+O5P3j5estpa6CdrKsPfhHzZ0PbPxkkaklcxQxO6EycJ/6lh+F3K840a+XzKcpqMGaph0OvKc6KwvEZeX7OMxB8NFdpZdOaArHLlCOUWfZ9s7dXdKHP9J0oMrQ0ze7mgDF8RHynzzOO0JbLtBwPax5XjhwOW6Sr7uaqYRhpEmpQZRL/LvE9lynlRKovOELasIm8ivKe9VPDZx2dlH1fvJjJbhXz2rcq27XCWPuID7AQkDNc0ERr55iYFWyxzteri6t1EmvLSpC5bZbgwDN+RCcQ7bWltQQ+3ZcbPmgoN7bOY2GdStitO5qni4QctAvEhYWFXlgxY75+Un1mUpnJ904ItlTOx7wnZSMOGJCN3KAIRmbNi4/1fnihNhIZiTNFHeVJGPW9omCk/htUPXHzk7pYFIh3dEOR+QyMJwocNdbgqbuobdtnQ4cq/ol7GgG/KErNA/J0SFmeJHm/pRpiKDR2mNpSVt2GXrydZmb8E4cgdIAvERUq8siy3Z2kjo/AGdtnQYVB9ZVEbdtnQUWmg5QM/y+vLApG0S/IHPN1nDtZUbOgwtaGsvA27bOgos812GkNUv8krZT1iJjz+M6YzJUvwcHuYbDIle7KHfmHSTsLH2DGQiQZl2yxKEI66ehfnNE9WBr6NmKScAWYHWO3COkH6N88JLwgbCQTBhJXbrbUtcqukJCsZ2F3bu3qxwXejmYGomo4Zi+mcucxTHymME+rIeGU6RZgr8HQ4Fnmr8vkG8VFLPq9cVUrGUjoDxHCxfi3WqjMRlBcIzCCMJf6qfJ1ZTdXoI2voJ33FKkWxpzPWeLpg+50Q3jVhyCJ2/nr5d638H0iOVu5eCmM9Rt9v74GYGjzzF1RkLN6ul8nvHQena8V/B4014Mr8oj9nehuuy/PxysgQRpkdsaY1Xg86QUTRUY+VmLxff5GfGwhtyrtV2VgJxiH5anSSnyAF+QaLcZ/1mJsIXchnVWmMnOZ9ohtyoA1yL42YLEiaaoMkAx2XRcwvAXmeATejiq6rX/cK+SiPZf9Hozzt5geD4fybsFg4zftxm/xiFMaaMC3GTEK+ktD38Ycg8EFmyYjQ+Szaz/rKLV2QO11KF0dE2I9dkNRQJzM2r0bELXGyT0MuahU7RLmWCsXoD/H3tFoet5eJbkKIPBZtJj7e1wZtDHYzOFk0IKTfTN/5tijh8MA5pf2Zxvyg0JocoZpCvk3Pbo2p+hVtpawhncxFW7k4faS+u/ZyHiBVoT7AnG+PBquaQvksSjEI6d8easJEfoX2oHqYEiMYhwYt6EH+BR7YUGZCaK+D4gPLBpkluoofTcUkEKnzfmE3wcgIFLUsi1qur251tlf81K23aT6+Yru3wNZITAORylmhTEf7NIElVCHIhp4aubandhXNYkbqbGF/4Z/Fgz783llG8AmTYh/Ct9/Wpp0sk/6PALijWzPdst9O1K0mrV8TfAu+vD03OPHcTCkvsr3sOW+/lH2bmLlZXtrGrbmombGkJcVEz37vInt8G0fcUzYZLZVyyPGt0r2fcIzASEkQQnA/LuSvQD7uz/CMTR/nm+kqvN8znmqbw/SOj4FXtOni2h61k5HhsKKNXf4+VfbQzWpFXNyaT2rFcvNKjpKK9czVWNGwh7TwBOqTEBt0s4IUpqmY6unyTB6k7k94wvLlHnL2qGxycaFqhfLTPSS0V2Aypdb1mkSGvBiX62VnV8eMpu3kUyfC2TMkdEVa03q7XJfIkA0vbjW13XW5a2RbcPJeWeyaGBf6uRoxNNGFnKFKXfhkSyfcTO6CGJM6L/Kc1F6N86hs38zE+QZlWcHMlGgvu3w4FtR/7eK2/EwApPZq2Jtlv9UXfaSvSibpwNNCL3t8OcbqmrWqHPEtnaEHX4gzseOCFohlyOjewPhiqCsI4fJtEgA+lZ3lkHGuuNcFyNWozww75MdYdWhneL/A/7QxI29WwCzFr4V+dft4nE/PtNVteTNzNVM2Vj5fx8GaNiozCkfX9L9utvOVsak9PpRjVMRrYdDTB6Js28AKon0tMR/aQH8Zl9+1xIUzNedIc5nhMaQxEmA6jnacdMRwx7jHWQRZUnyL9MQQdFU+sBSq6TrBqSrLlbVKd0jpdFfohnkrL8mykAhtYuuFDdjn41XzI+PG2dpEBqJNZIIKb2CiIJCyJ8rOaQPa+iXlnzJgGd+z7+XKQNNA3NGVYR7q/eoANvFeBx/hjE12cuVQCsT6zB6grNvUzP4B5WMGJTbxNhAnx8Z0H394DaKOHFQnU4B5Jsnmpg9uPd01vSJu0VN7fAfrnng0WIzCm4/bunAsBeJgrG5aMzsf3oxVeB3EuqRAHIzSuu9C1803WO1+5N7ShRksVTeRzU0KB1iWBxZedOonMXdZvAzEYBZM9oucmsfHKx8Yy+Lk4mN6a27tBeyx3PKe+e5kOZhJIFI25r6QZ+3vjTlOvuFo0kccC1dDVs2waMFU+O5hLCetd4HI4oHYZa4cnGHBycekY6IFPT6oMLl4VdpvcmteJq2vVGqO44CtBR229PjA6qsujDAJROx53oVRHum0FUC29PhAzQsujEiB2JvVt/U+XOsoL+6b8lyropYyeRmIz7XkfFfVsILGtG+3Q1fGO6rXy0DkawWxi+maS9PyvvH7bxcGmd4yhlwY5ZnOPQ3tMS1vWL314o9b1yiFKRD7s3pI/yyVORg79P594Erryw8wFGVdTAPxQesW+aeQKxoPHE1kdxWKaQEEw3VPNSGiXxnTQJzXr4IIjsPRhxv68dGG5Xwt9rCvhmEXnVdmWWLGkPwbdEqTd4C5gsTEyyXyx4mYXhEx6k4nlvmldJLM+dCAJn1O+dcdsIzv2f/qs4FnybiYzvoqX56Vn3XX4jF2+HqEvLAw2Fs5WJZVNV5s6VfJ136T/rzlxpUjNt+Xyievr/DryECWSsVGfJU/v5KvVUuhCMJbIuVijvzyXmbLwqqGizGd0YLDBNYZIgQgT9YLhRj9xafTBO+FjnmsDdDLL5bCPSGwgLZXvhiO7SIfnQkj/zaEN7sWCIMOcdioO+lwz8DfVcVOLquxMXyDffwrsd+7NDTp7pSBi13XbisQsfMi18Ym/Z0wQPfD2UB25pHNQLxCSh/PFKdtNAxcKk+cL/ez2aejw75YODSaJkiO0KbHCAzmByWMrw0JMTwlJh9auCVn0W3ziohOzqBFwuH8SBI0A8ykHCs8F6oXDAndJKQrStgcnN5mANoaRyzavI0S+Ldo2cxD8Xj67TcD/E8VFgTzxNyK2L41Z0bzvvNrQqyf8M38jHH7hpzigfPJWJxjaOhyId2iw+LgU7EEYN4PVubckYIxmJPx6/nGi21/Czk0JKQro98c/EJt5OqZQar9kHfKjAVCCkY/ObhSbbOmH6Hi3gq+Rn+3kILRLw7OU5u4emh1H1UNa2AB6bVCCsbuOViudjilYTtGUWx1efEdASJSQHbDAYsY0poAkYBMFVhwmYKxXQ4uEuf808okOQb4Qv2XhSVCCki3HMwXxwcKSXowwIPMt4XYvozgw8k1T7yeIFS9eahDSYoMjFPCmULMb8O1FZy3icejBJuLn6VubAnkvUs4X2Deuq3GC72e+8XVLGGKEJSEMJLOU/YewgyB4NxL2EhIsuLVjLki4kZhjvCIEKSEEIhlxE5QIq83bitMFMYLfMOQp0GCFKwnhDhQy1WZlUv0l18WXhJYnPqMsEB4THhAuE94UYhCQg3EuuSvpYwEJOsiMzCVxdN6tiVYuermkaXBTxFKGpmTZUU6gcO2uM84KUuqWNMH8vusfuYjTRl414eRA7YEITrHlPwPQ/dQJyFvyoQAAAAASUVORK5CYII",
            alignment: 'center',
            width: 50,
            height: 42,
            margin: [0, -5],
          },
          {
            text: 'QUOKKA Break',
            bold: true,
            fontSize: 12,
            alignment: 'center',
            margin: [0, 15]
          },
          {
            text: this.PDate.transform(this.QDate, "HH:mm"),
            //fontSize: 14,
            fontSize: 12,
            alignment: 'center',
            margin: [0, 30]
          },
          {
            text: this.PDate.transform(this.QDate, "EEEE, dd LLLL"),
            //fontSize: 13,
            fontSize: 11,
            alignment: 'center',
            margin: [0, -30]
          },
          {
            text: "Fjord Paris",
            //fontSize: 13,
            fontSize: 11,
            alignment: 'center',
            margin: [0, 30]
          },
          {
            text: "@User-test",
            //fontSize: 13,
            fontSize: 11,
            alignment: 'center',
            margin: [0, -30]
          },
          {
            text: this.Task.title,
            //fontSize: 25,
            fontSize: 20,
            alignment: 'center',
            margin: [0, 70]
          },
          {
            text: this.Task.hashtag,
            //fontSize: 15,
            fontSize: 11,
            alignment: 'center',
            margin: [0, -20]
          },
          {
            qr: "http://quokka.mystrikingly.com",
            fit: 50,
            alignment: 'center',
            margin: [0, 60]
          },
          {
            text: "Share and submit your own break on Quokka.com",
            //fontSize: 13,
            fontSize: 10,
            alignment: 'center',
            margin: [0, -30]
          }
      ]
    };
    
    /*if (this.Task.title.length > 45)
      documentDefinition.content[6].fontSize = 16;*/

    if (this.Task.title.length > 45)
      documentDefinition.content[6].fontSize = 15;  
    //pdfMake.createPdf(documentDefinition).open({}, window);
    //pdfMake.createPdf(documentDefinition).open();
    pdfMake.createPdf(documentDefinition).download();
  }

  setTaskTab(id : number){
      switch(id){
        case 1 : { this.QuokkaTask = this.qDataService.getQuokkaTabCat("Physical Activity"); break;}
        case 2 : { this.QuokkaTask = this.qDataService.getQuokkaTabCat("Learning Something New"); break;}
        case 3 : { this.QuokkaTask = this.qDataService.getQuokkaTabCat("Playing A Game"); break;}
        case 4 : { this.QuokkaTask = this.qDataService.getQuokkaTabCat("Setting New Goals"); break;}
        case 5 : { this.QuokkaTask = this.qDataService.getQuokkaTabCat("Helping And Interacting"); break;}
        case 6 : { this.QuokkaTask = this.qDataService.quokkaTask }
    }
    console.log(this.QuokkaTask);
    
  }

  getTicket(id : number){
    this.setTaskTab(id);
    this.setTask();
    this.generateTicket();
  }
}
