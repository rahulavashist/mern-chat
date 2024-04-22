import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
    {
        participants: [
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        ]
    },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        message : {
            type : String,
            required : true,
        },
    }, {timeseries :true} // createAt , updateAt
)
const Message = mongoose.model("Message", messageSchema)

export default Message;