//�����������չ������
//		 ���� :xxx
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
Array.prototype.maxno = array_maxno;//�������������ֵ�±�

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
Array.prototype.minno = array_minno;//������������Сֵ�±�

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
Array.prototype.max = array_max;	//�������������ֵ

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
Array.prototype.min = array_min;	//������������Сֵ

function array_ynin(ch)
{
	var i, a=this[0];
	for ( i=0; i<this.length; i++ ) 	if ( this[i]==ch )	return i;
	return -1;
}
Array.prototype.ynin = array_ynin;	
//�÷�: array.ynin(ch)
//����: �����е���ch �ĵ�һ��Ԫ���±� , ����ֵΪ -1 ��ʾ��.

function array_ynhave(num1,num2)
{
	var i, a=this[0];
	for ( i=0; i<this.length; i++ ) 	if ( this[i]>=num1 && this[i]<num2 )	return true;
	return false;
}
Array.prototype.ynhave = array_ynhave;	
//��;: �ж��������Ƿ��� ���ڵ��� num1 �� С��num2 ����
//�﷨: array.ynhave(0,100)
//����: true �� false ��


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
//��;: ���������� ��ӽ��Ҳ����� num1 �� �����±�
//�﷨: array.nearto(103)
//��ע: �Ʋ�����

