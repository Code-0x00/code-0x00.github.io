#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
import os
import json
import codecs
f=open('in.txt','r')
lines=f.readlines()
f.close()
lines.reverse()

t={}
for line in lines:
    xkey=line.split(':')[0]
    xvalues=line.strip().split(':')[1].split(',')
    t[xkey]={}
    t[xkey]['name']=xkey
    t[xkey]['children']=[]
    for v in xvalues:
        if t.has_key(v):
            t[xkey]['children'].append(t[v])
        else:
            tmp={}
            tmp['name']=v
            tmp['value']=0
            t[xkey]['children'].append(tmp)
    
json=json.dumps(t["科学推理"],ensure_ascii=False)
#print json
f=open('tree.json','w')
f.write(json)
f.close()