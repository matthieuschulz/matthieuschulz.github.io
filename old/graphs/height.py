#!/usr/bin/env python3

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.ticker import MaxNLocator

age = [i for i in range(0, 19)]
height = [50, 75, 84, 90, 96, 104, 112, 116, 122, 126, 132, 136, 142, 146, 170, 172, 175, 177, 178]

ax = plt.figure().gca()
ax.xaxis.set_major_locator(MaxNLocator(integer=True))
fig = plt.gcf()
fig.canvas.set_window_title("Height growth from 2000-18")

plt.title("My height over the years")
plt.xlabel("Age")
plt.ylabel("Height (cm)")
plt.plot(age, height,"-o",label="height")
plt.annotate(xy=[13.6, 155], s='Puberty hits')
plt.legend()
plt.show()
