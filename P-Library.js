function touch(m,d)
{
 if (m.x- d.x<=d.width/2+m.width/2 &&
  d.x-m.x<=d.width/2+m.width/2 &&  m.y- d.y<=d.height/2+m.height/2 &&
  d.y-m.y<=d.height/2+m.height/2)
 {
  return true;
 }
 else
 {
   return false;
 }
}

function Boff(m,s)
{
  if(m.x- s.x<=s.width/2+m.width/2 &&
    s.x-m.x<=s.width/2+m.width/2 &&  m.y- s.y<=s.height/2+m.height/2 &&
    s.y-m.y<=s.height/2+m.height/2)
    {
      
      m.velocityX = m.velocityX*-1;
    }
}