from django.contrib.auth.models import User, Group
from rest_framework import serializers

from IdleRagnarok.model import Chars


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class CharsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chars
        fields = (
            'char_id', 'account_id', 'char_num', 'name', 'class', 'base_level',
            'job_level', 'base_exp',
            'job_exp', 'zeny', 'str', 'agi', 'vit', 'int', 'dex', 'luk',
            'max_hp',
            'hp', 'max_sp', 'sp',
            'status_point', 'skill_point', 'option', 'karma', 'manner',
            'party_id',
            'guild_id', 'pet_id',
            'homun_id', 'elemental_id', 'hair', 'hair_color', 'clothes_color',
            'body', 'weapon', 'shield',
            'head_top', 'head_mid', 'head_bottom', 'robe', 'last_map',
            'last_x',
            'last_y', 'save_map',
            'save_x', 'save_y', 'partner_id', 'online', 'father', 'mother',
            'child', 'fame', 'rename',
            'delete_date', 'slotchange', 'char_opt', 'font', 'unban_time',
            'uniqueitem_counter', 'sex',
            'hotkey_rowshift')


CharsSerializer._declared_fields["class"] = serializers.CharField(
    source="class_name")
CharsSerializer._declared_fields["str"] = serializers.CharField(
    source="str_stat")
CharsSerializer._declared_fields["int"] = serializers.CharField(
    source="int_stat")
