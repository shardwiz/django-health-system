import hashlib,sys
import time
import csv
import random

class Block:
    #A basic block contains, index (blockheight), the previous hash, a timestamp, tx information, a nonce, and the current hash
    def __init__(self, index, previousHash, timestamp, data, proof, currentHash):
        self.index = index
        self.previousHash = previousHash
        self.timestamp = timestamp
        self.data = data
        self.currentHash = currentHash
        self.proof = proof

def getGenesisBlock():
    return Block(0, '0', '1518325626.5097494', "Genesis Block", 0, '02d779570304667b4c28ba1dbfd4428844a7cab89023205c66858a40937557f8')

def calculateHash(index, previousHash, timestamp, data, proof):
    value = str(index) + str(previousHash) + str(timestamp) + str(data) + str(proof)
    sha = hashlib.sha256(value.encode('utf-8'))
    return str(sha.hexdigest())

def calculateHashForBlock(block):
    return calculateHash(block.index, block.previousHash, block.timestamp, block.data, block.proof)

def getLatestBlock(blockchain):
    return blockchain[len(blockchain)-1]

def generateNextBlock(blockchain, blockData, timestamp, proof):
    previousBlock = getLatestBlock(blockchain)
    nextIndex = int(previousBlock.index) + 1
    nextTimestamp = timestamp
    nextHash = calculateHash(nextIndex, previousBlock.currentHash, nextTimestamp, proof, blockData)
    return Block(nextIndex, previousBlock.currentHash, nextTimestamp, blockData, proof, nextHash)

def writeBlockchain(blockchain):
    blockchainList = []
    for block in blockchain:
        blockList = [block.index, block.previousHash, str(block.timestamp), block.data, block.proof, block.currentHash]
        blockchainList.append(blockList)

    with open("blockchain.csv", "w") as file:
        writer = csv.writer(file)
        writer.writerows(blockchainList)
    print('Blockchain written to blockchain.csv.')

def readBlockchain(blockchainFilePath):
    importedBlockchain = []
    try:
        with open(blockchainFilePath, 'r') as file:
            blockReader = csv.reader(file)
            for line in blockReader:
                block = Block(line[0], line[1], line[2], line[3], line[4], line[5])
                importedBlockchain.append(block)
        print("Pulling blockchain from csv...")
        return importedBlockchain
    except:
        print('No blockchain located. Generating new genesis block...')
        return [getGenesisBlock()]

def getTxData(report):
    txData = ''
    for _ in range(4):
        data = report
        txData += data
    return txData

def mineNewBlock(report, difficulty = 4, blockchainPath = 'blockchain.csv'):
    blockchain = readBlockchain(blockchainPath)
    txData = getTxData(report)
    timestamp = time.time()
    proof = 0
    newBlockFound = False
    print('Mining a block...')
    i=0
    while not newBlockFound:
        print(i,")Trying new block proof...")
        newBlockAttempt = generateNextBlock(blockchain, txData, timestamp, proof)
        if newBlockAttempt.currentHash[0:difficulty] == '0'*difficulty:
            stopTime = time.time()
            timer = stopTime - timestamp
            print('New block found with proof', proof, 'in', round(timer, 2), 'seconds.')

            newBlockFound = True
        else:
            proof += 1
    blockchain.append(newBlockAttempt)
    writeBlockchain(blockchain)
    i += 1

def mine(report):
    blocksToMine = 1
    for _ in range(blocksToMine):
        mineNewBlock(report)

report = sys.argv[0]
print(report)
mine(report)
