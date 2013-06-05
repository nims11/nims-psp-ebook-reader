function ebook(bname,bfirstPage,blastPage,images,bg,bg2,fg)
{
 this.name=bname;
 this.lastPage=new String(blastPage);
 this.firstPage=new String(bfirstPage);
 this.type=this.firstPage.slice(this.firstPage.lastIndexOf("."));
 this.images=new String(images);
 this.bg=new String(bg);
 this.bg2=new String(bg2);
 this.fg=new String(fg);
}

var book=new Array();

