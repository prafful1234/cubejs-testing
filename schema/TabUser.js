cube(`TabUser`, {
  sql: `SELECT * FROM newdatabase.\`tabUser\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, roleProfileName, username, lastName, firstName, fullName, middleName, birthDate, lastPasswordResetDate]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    modifiedBy: {
      sql: `modified_by`,
      type: `string`
    },
    
    owner: {
      sql: `owner`,
      type: `string`
    },
    
    parent: {
      sql: `parent`,
      type: `string`
    },
    
    parentfield: {
      sql: `parentfield`,
      type: `string`
    },
    
    parenttype: {
      sql: `parenttype`,
      type: `string`
    },
    
    roleProfileName: {
      sql: `role_profile_name`,
      type: `string`
    },
    
    lastKnownVersions: {
      sql: `last_known_versions`,
      type: `string`
    },
    
    emailSignature: {
      sql: `email_signature`,
      type: `string`
    },
    
    redirectUrl: {
      sql: `redirect_url`,
      type: `string`
    },
    
    resetPasswordKey: {
      sql: `reset_password_key`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    lastLogin: {
      sql: `last_login`,
      type: `string`
    },
    
    bio: {
      sql: `bio`,
      type: `string`
    },
    
    mobileNo: {
      sql: `mobile_no`,
      type: `string`
    },
    
    userType: {
      sql: `user_type`,
      type: `string`
    },
    
    backgroundImage: {
      sql: `background_image`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    timeZone: {
      sql: `time_zone`,
      type: `string`
    },
    
    location: {
      sql: `location`,
      type: `string`
    },
    
    restrictIp: {
      sql: `restrict_ip`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    backgroundStyle: {
      sql: `background_style`,
      type: `string`
    },
    
    apiKey: {
      sql: `api_key`,
      type: `string`
    },
    
    fullName: {
      sql: `full_name`,
      type: `string`
    },
    
    userImage: {
      sql: `user_image`,
      type: `string`
    },
    
    apiSecret: {
      sql: `api_secret`,
      type: `string`
    },
    
    middleName: {
      sql: `middle_name`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    newPassword: {
      sql: `new_password`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    lastIp: {
      sql: `last_ip`,
      type: `string`
    },
    
    homeSettings: {
      sql: `home_settings`,
      type: `string`
    },
    
    documentFollowFrequency: {
      sql: `document_follow_frequency`,
      type: `string`
    },
    
    interest: {
      sql: `interest`,
      type: `string`
    },
    
    bannerImage: {
      sql: `banner_image`,
      type: `string`
    },
    
    creation: {
      sql: `creation`,
      type: `time`
    },
    
    modified: {
      sql: `modified`,
      type: `time`
    },
    
    birthDate: {
      sql: `birth_date`,
      type: `time`
    },
    
    lastActive: {
      sql: `last_active`,
      type: `time`
    },
    
    lastPasswordResetDate: {
      sql: `last_password_reset_date`,
      type: `time`
    }
  }
});
