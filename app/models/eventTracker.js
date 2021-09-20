const mongoose = require('mongoose');
const schema = mongoose.Schema;

const eventtrackSchema = new schema({
    event_type: {type: String,
    enum: ["BECOME_RESELLER", "BECOME_SUPPLIER", "OTHER"],
        
    },
    event_name: { type: String ,
        enum: ["Become a Yaari Supplier Now", "Download App Now", "Download Now", "Join Now"],
    },
    event_page: { type: String,
    enum:["BECOME_RESELLER","BECOME_SUPPLIER_PAGE","FOOTER","HOME_PAGE"]
    },
    ip: { type: String },
    country: { type: String },
    region: { type: String },
    city: { type: String },
    pin_code: { type: String },
    lat_long: { type: String },
   isActive: { type: Boolean, default: true },
   },{
  timestamps:true,
});

module.exports = mongoose.model('eventsTecks', eventtrackSchema);