cube(`TabAccount`, {
  sql: `SELECT * FROM newdatabase.\`tabAccount\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, accountName]
    },
    
    interCompanyAccount: {
      sql: `inter_company_account`,
      type: `sum`
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
    
    balanceMustBe: {
      sql: `balance_must_be`,
      type: `string`
    },
    
    reportType: {
      sql: `report_type`,
      type: `string`
    },
    
    company: {
      sql: `company`,
      type: `string`
    },
    
    freezeAccount: {
      sql: `freeze_account`,
      type: `string`
    },
    
    accountCurrency: {
      sql: `account_currency`,
      type: `string`
    },
    
    oldParent: {
      sql: `old_parent`,
      type: `string`
    },
    
    accountName: {
      sql: `account_name`,
      type: `string`
    },
    
    parentAccount: {
      sql: `parent_account`,
      type: `string`
    },
    
    accountType: {
      sql: `account_type`,
      type: `string`
    },
    
    rootType: {
      sql: `root_type`,
      type: `string`
    },
    
    accountNumber: {
      sql: `account_number`,
      type: `string`
    },
    
    creation: {
      sql: `creation`,
      type: `time`
    },
    
    modified: {
      sql: `modified`,
      type: `time`
    }
  }
});
