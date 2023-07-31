import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  FundsDeposited as FundsDepositedEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  Initialized as InitializedEvent,
  JobCreated as JobCreatedEvent,
  JobSuccess as JobSuccessEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Upgraded as UpgradedEvent,
  XReceiveData as XReceiveDataEvent,
  XTransferData as XTransferDataEvent,
  ExecutedSourceChain as ExecutedSourceChainEvent
} from "../generated/AutoPay/AutoPay"
import {
  AdminChanged,
  BeaconUpgraded,
  FundsDeposited,
  FundsWithdrawn,
  Initialized,
  JobCreated,
  JobSuccess,
  OwnershipTransferred,
  Upgraded,
  XReceiveData,
  XTransferData,
  ExecutedSourceChain
} from "../generated/schema"

// event ExecutedSourceChain(
//   bytes32 indexed _jobId,
//   address indexed _from,
//   uint256 _timesExecuted,
//   uint256 _fundsUsed,
//   uint256 _amountOut
// );

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousAdmin = event.params.previousAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.beacon = event.params.beacon

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsDeposited(event: FundsDepositedEvent): void {
  let entity = new FundsDeposited(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.receiver = event.params.receiver
  entity.initiator = event.params.initiator
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleJobCreated(event: JobCreatedEvent): void {
  let entity = new JobCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._taskCreator = event.params._taskCreator
  entity._jobId = event.params._jobId
  entity._gelatoTaskId = event.params._gelatoTaskId
  entity._to = event.params._to
  entity._amount = event.params._amount
  entity._fromToken = event.params._fromToken
  entity._toToken = event.params._toToken
  entity._toChain = event.params._toChain
  entity._destinationDomain = event.params._destinationDomain
  entity._destinationContract = event.params._destinationContract
  entity._cycles = event.params._cycles
  entity._startTime = event.params._startTime
  entity._interval = event.params._interval
  entity._isForwardPaying = event.params._isForwardPaying
  entity.option = event.params.option

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


export function handleJobSuccess(event: JobSuccessEvent): void {
  let entity = new JobSuccess(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.txFee = event.params.txFee
  entity.feeToken = event.params.feeToken
  entity.execAddress = event.params.execAddress
  entity.execData = event.params.execData
  entity.taskId = event.params.taskId
  entity.callSuccess = event.params.callSuccess

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.implementation = event.params.implementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleXReceiveData(event: XReceiveDataEvent): void {
  let entity = new XReceiveData(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.originSender = event.params.originSender
  entity.origin = event.params.origin
  entity.asset = event.params.asset
  entity.amount = event.params.amount
  entity.transferId = event.params.transferId
  entity.receiveTimestamp = event.params.receiveTimestamp
  entity.senderAccount = event.params.senderAccount
  entity.receiverAccount = event.params.receiverAccount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleXTransferData(event: XTransferDataEvent): void {
  let entity = new XTransferData(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.fromToken = event.params.fromToken
  entity.toToken = event.params.toToken
  entity.destinationContract = event.params.destinationContract
  entity.amount = event.params.amount
  entity.startTime = event.params.startTime
  entity.relayerFeeInTransactingAsset =
    event.params.relayerFeeInTransactingAsset
  entity.destinationDomain = event.params.destinationDomain

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutedSourceChain(event: ExecutedSourceChainEvent): void {
  let entity = new ExecutedSourceChain(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._jobId = event.params._jobId
  entity._from = event.params._from
  entity._timesExecuted = event.params._timesExecuted
  entity._fundsUsed = event.params._fundsUsed
  entity._amountOut = event.params._amountOut
  entity._isForwardPaying = event.params._isForwardPaying

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
