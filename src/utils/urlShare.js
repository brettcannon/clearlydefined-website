import protobuf from 'protobufjs'
import shareUrlDescriptor from './shareUrlDescriptor.json'

export default class UrlShare {
  constructor(payload) {
    this.payload = payload
    protobuf.configure()
  }

  start() {
    const root = protobuf.Root.fromJSON(shareUrlDescriptor)
    this.ShareUrlMessage = root.lookupType('ShareUrl')
  }

  isValid() {
    const result = this.ShareUrlMessage.verify(this.payload)
    return result !== null ? result : true
  }

  toValidObject() {
    return this.ShareUrlMessage.toObject(this.payload)
  }

  encode(message) {
    let buffer = this.ShareUrlMessage.encode(message).finish()
    const original =
      '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'
    console.log(`buffer = ${Array.prototype.toString.call(buffer)}`)
    console.log('=======', original.length, buffer.length)
    return buffer
  }

  decode(message) {
    try {
      var decodedMessage = this.ShareUrlMessage.decode(message)
      //console.log(JSON.stringify(decodedMessage))
    } catch (e) {
      if (e instanceof protobuf.util.ProtocolError) {
        // e.instance holds the so far decoded message with missing required fields
      } else {
        // wire format is invalid
      }
    }
  }
}
