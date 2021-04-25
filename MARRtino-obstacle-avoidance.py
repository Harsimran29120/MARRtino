import random

begin()
while marrtino_ok():
  if (obstacle_distance(0)) > 1:
    forward(1)

  else:
    if (random.randint(0,1)) == 0:
      right(1)
    else:
      left(1)
end()


import random


begin()
while marrtino_ok():
  if (obstacle_distance(0)) > 3:
    forward(0.5)
  else:
    turn((random.randint(60,270)))
end()



# 1 metro == 2.8 MARRtino

