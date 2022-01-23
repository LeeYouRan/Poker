//关于数组的扩展函数集
//		 作者 :xxx
//		 Q  Q :xxx
//       Email:xxx

function array_maxno()
{
  var l=0,i, max = this[0];
  for (i = 1; i < this.length; i++)
  {
     if (max < this[i])
     {
	     max = this[i];
	     l=i;
	 }
  }
	 return l;
}
Array.prototype.maxno = array_maxno;//返回数组中最大值下标

function array_minno()
{
  var l=0,i, min = this[0];
  for (i = 1; i < this.length; i++)
  {
     if (min > this[i])
     {
	     min = this[i];
	     l=i;
	 }
  }
	 return l;
}
Array.prototype.minno = array_minno;//返回数组中数小值下标

function array_max( )
{
  var i, max = this[0];
  for (i = 1; i < this.length; i++)
  {
     if (max < this[i])
	     max = this[i];
  }
  return max;
}
Array.prototype.max = array_max;	//返回数组中最大值

function array_min( )
{
  var i, min = this[0];
  for (i = 1; i < this.length; i++)
  {
     if (min > this[i])
	     min = this[i];
  }
  return min;
}
Array.prototype.min = array_min;	//返回数组中最小值

function array_ynin(ch)
{
	var i, a=this[0];
	for ( i=0; i<this.length; i++ ) 	if ( this[i]==ch )	return i;
	return -1;
}
Array.prototype.ynin = array_ynin;	
//用法: array.ynin(ch)
//返回: 数组中等于ch 的第一个元素下标 , 返回值为 -1 表示无.

function array_ynhave(num1,num2)
{
	var i, a=this[0];
	for ( i=0; i<this.length; i++ ) 	if ( this[i]>=num1 && this[i]<num2 )	return true;
	return false;
}
Array.prototype.ynhave = array_ynhave;	
//用途: 判断数组中是否有 大于等于 num1 且 小于num2 的数
//语法: array.ynhave(0,100)
//返回: true 有 false 无


function array_nearto(num1)
{
	var l,i; near =99999;
	for (i = 0; i < this.length; i++)
	{
		if ( num1-this[i]>0 )
		{
			 if ( near > num1-this[i] )
		     {
			     near = num1-this[i];
			     l=i;
			 }
		}
	}
	return l;
}
Array.prototype.nearto = array_nearto;
//用途: 返回数组中 最接近且不大于 num1 的 数的下标
//语法: array.nearto(103)
//备注: 善不完整

