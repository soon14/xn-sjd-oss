import React from 'react';
import { Form } from 'antd';
import { getQueryString } from 'common/js/util';
import DetailUtil from 'common/js/build-detail';

@Form.create()
class LedgerAddEdit extends DetailUtil {
  constructor(props) {
    super(props);
    this.code = getQueryString('code', this.props.location.search);
    this.view = !!getQueryString('v', this.props.location.search);
  }
  render() {
    const fields = [{
      title: '流水编号',
      field: 'code'
    }, {
      title: '户名',
      field: 'realName',
      required: true,
      maxlength: 32
    }, {
      title: '账号',
      field: 'accountNumber',
      required: true
    }, {
      title: '币种',
      field: 'currency',
      type: 'select',
      key: 'coin'
    }, {
      title: '渠道类型',
      field: 'channelType',
      type: 'select',
      key: 'channel_type'
    }, {
      title: '业务类型',
      field: 'bizType',
      type: 'select',
      key: 'biz_type'
    }, {
      title: '生成说明',
      field: 'bizNote'
    }, {
      title: '变动金额',
      field: 'transAmount',
      amount: true
    }, {
      title: '变动前金额',
      field: 'preAmount',
      amount: true
    }, {
      title: '变动后金额',
      field: 'postAmount',
      amount: true
    }, {
      title: '金额変动时间',
      field: 'createDatetime',
      type: 'datetime'
    }, {
      title: '状态',
      field: 'status',
      type: 'select',
      key: 'jour_status'
    }, {
      title: '拟对账时间',
      field: 'workDate'
    }, {
      title: '对账人',
      field: 'checkUser'
    }, {
      title: '对账时间',
      field: 'checkDatetime',
      type: 'datetime'
    }, {
      title: '调账人',
      field: 'adjustUser'
    }, {
      title: '调账时间',
      field: 'adjustDatetime',
      type: 'datetime'
    }, {
      title: '备注',
      field: 'remark',
      maxlength: 250
    }];
    return this.buildDetail({
      fields,
      code: this.code,
      view: this.view,
      detailCode: 802522
    });
  }
}

export default LedgerAddEdit;
