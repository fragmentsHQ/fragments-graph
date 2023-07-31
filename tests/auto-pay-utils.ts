import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
  XTransferData
} from "../generated/AutoPay/AutoPay"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createFundsDepositedEvent(
  sender: Address,
  token: Address,
  amount: BigInt
): FundsDeposited {
  let fundsDepositedEvent = changetype<FundsDeposited>(newMockEvent())

  fundsDepositedEvent.parameters = new Array()

  fundsDepositedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  fundsDepositedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  fundsDepositedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsDepositedEvent
}

export function createFundsWithdrawnEvent(
  receiver: Address,
  initiator: Address,
  token: Address,
  amount: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("initiator", ethereum.Value.fromAddress(initiator))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsWithdrawnEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createJobCreatedEvent(
  _taskCreator: Address,
  _jobId: Bytes,
  _gelatoTaskId: Bytes,
  _to: Address,
  _amount: BigInt,
  _fromToken: Address,
  _toToken: Address,
  _toChain: BigInt,
  _destinationDomain: BigInt,
  _destinationContract: Address,
  _cycles: BigInt,
  _startTime: BigInt,
  _interval: BigInt,
  option: i32
): JobCreated {
  let jobCreatedEvent = changetype<JobCreated>(newMockEvent())

  jobCreatedEvent.parameters = new Array()

  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_taskCreator",
      ethereum.Value.fromAddress(_taskCreator)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam("_jobId", ethereum.Value.fromFixedBytes(_jobId))
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_gelatoTaskId",
      ethereum.Value.fromFixedBytes(_gelatoTaskId)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_fromToken",
      ethereum.Value.fromAddress(_fromToken)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam("_toToken", ethereum.Value.fromAddress(_toToken))
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_toChain",
      ethereum.Value.fromUnsignedBigInt(_toChain)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_destinationDomain",
      ethereum.Value.fromUnsignedBigInt(_destinationDomain)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_destinationContract",
      ethereum.Value.fromAddress(_destinationContract)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_cycles",
      ethereum.Value.fromUnsignedBigInt(_cycles)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_startTime",
      ethereum.Value.fromUnsignedBigInt(_startTime)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_interval",
      ethereum.Value.fromUnsignedBigInt(_interval)
    )
  )
  jobCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "option",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(option))
    )
  )

  return jobCreatedEvent
}



export function createJobSuccessEvent(
  txFee: BigInt,
  feeToken: Address,
  execAddress: Address,
  execData: Bytes,
  taskId: Bytes,
  callSuccess: boolean
): JobSuccess {
  let jobSuccessEvent = changetype<JobSuccess>(newMockEvent())

  jobSuccessEvent.parameters = new Array()

  jobSuccessEvent.parameters.push(
    new ethereum.EventParam("txFee", ethereum.Value.fromUnsignedBigInt(txFee))
  )
  jobSuccessEvent.parameters.push(
    new ethereum.EventParam("feeToken", ethereum.Value.fromAddress(feeToken))
  )
  jobSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "execAddress",
      ethereum.Value.fromAddress(execAddress)
    )
  )
  jobSuccessEvent.parameters.push(
    new ethereum.EventParam("execData", ethereum.Value.fromBytes(execData))
  )
  jobSuccessEvent.parameters.push(
    new ethereum.EventParam("taskId", ethereum.Value.fromFixedBytes(taskId))
  )
  jobSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "callSuccess",
      ethereum.Value.fromBoolean(callSuccess)
    )
  )

  return jobSuccessEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

export function createXReceiveDataEvent(
  originSender: Address,
  origin: BigInt,
  asset: Address,
  amount: BigInt,
  transferId: Bytes,
  receiveTimestamp: BigInt,
  senderAccount: Address,
  receiverAccount: Address
): XReceiveData {
  let xReceiveDataEvent = changetype<XReceiveData>(newMockEvent())

  xReceiveDataEvent.parameters = new Array()

  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "originSender",
      ethereum.Value.fromAddress(originSender)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam("origin", ethereum.Value.fromUnsignedBigInt(origin))
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "transferId",
      ethereum.Value.fromFixedBytes(transferId)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "receiveTimestamp",
      ethereum.Value.fromUnsignedBigInt(receiveTimestamp)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "senderAccount",
      ethereum.Value.fromAddress(senderAccount)
    )
  )
  xReceiveDataEvent.parameters.push(
    new ethereum.EventParam(
      "receiverAccount",
      ethereum.Value.fromAddress(receiverAccount)
    )
  )

  return xReceiveDataEvent
}

export function createXTransferDataEvent(
  sender: Address,
  receiver: Address,
  fromToken: Address,
  toToken: Address,
  destinationContract: Address,
  amount: BigInt,
  startTime: BigInt,
  relayerFeeInTransactingAsset: BigInt,
  destinationDomain: BigInt
): XTransferData {
  let xTransferDataEvent = changetype<XTransferData>(newMockEvent())

  xTransferDataEvent.parameters = new Array()

  xTransferDataEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  xTransferDataEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  xTransferDataEvent.parameters.push(
    new ethereum.EventParam("fromToken", ethereum.Value.fromAddress(fromToken))
  )
  xTransferDataEvent.parameters.push(
    new ethereum.EventParam("toToken", ethereum.Value.fromAddress(toToken))
  )
  xTransferDataEvent.parameters.push(
    new ethereum.EventParam(
      "destinationContract",
      ethereum.Value.fromAddress(destinationContract)
    )
  )
  xTransferDataEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  xTransferDataEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  xTransferDataEvent.parameters.push(
    new ethereum.EventParam(
      "relayerFeeInTransactingAsset",
      ethereum.Value.fromUnsignedBigInt(relayerFeeInTransactingAsset)
    )
  )
  xTransferDataEvent.parameters.push(
    new ethereum.EventParam(
      "destinationDomain",
      ethereum.Value.fromUnsignedBigInt(destinationDomain)
    )
  )

  return xTransferDataEvent
}
