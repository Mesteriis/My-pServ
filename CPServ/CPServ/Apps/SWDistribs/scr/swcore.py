import os
from os.path import getsize, join


class Items(object):
    """"Array items"""
    m_items = []

    def __init__(self, m_dirScan, typeScan=False):
        self.ScanDir = m_dirScan
        self.m_typeScan = typeScan

    def __repr__(self):
        return f"{self.m_items}"

    def getItemsOfDir(self):
        for dirname, dirnames, filenames in os.walk(dirForRead):
            for subdirname in dirnames:
                if not subdirname.startswith('_'):
                    dict_item = dict()
                    dict_item['Name'] = subdirname
                    dict_item['Type'] = 'DIR'
                    dict_item['Path'] = os.path.join(dirname, subdirname)
                    dict_item['Size'] = 0
                    dict_item['Category'] = 'UNK'
                    self.m_items.append(dict_item)
                    del dict_item
            for filename in filenames:
                if not filename.startswith('.'):
                    dict_item = dict()
                    dict_item['Name'] = filename
                    dict_item['Type'] = 'Fls'
                    dict_item['Path'] = os.path.join(dirname, filename)
                    dict_item['Size'] = getsize(os.path.join(dirname, filename))
                    dict_item['Category'] = ''
                    self.m_items.append(dict_item)
                    del dict_item

    def calcSizeItem(self, _id):
        """Calculate size item"""
        total_size = 0
        if self.m_items[_id]['Type'] == 'DIR':
            for root, dirs, files in os.walk(self.m_items[_id]['Path']):
                total_size = sum(getsize(join(root, name)) for name in files)
                print(total_size)
                break
            self.m_items[_id]['Size'] = total_size
        else:
            return
