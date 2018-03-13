from django.db import models


class Guilds(models.Model):
    guild_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    char_id = models.IntegerField()
    master = models.CharField(max_length=20)
    guild_lv = models.IntegerField()
    connect_member = models.IntegerField()
    max_member = models.IntegerField()
    average_lv = models.IntegerField()
    exp = models.IntegerField()
    next_exp = models.IntegerField()
    skill_point = models.IntegerField()
    mes1 = models.CharField(max_length=100)
    mes2 = models.CharField(max_length=100)
    emblem_len = models.IntegerField()
    emblem_id = models.IntegerField()
     # emblem_data, dont know datatype

    class Meta:
        app_label = 'IdleRagnarok'
        db_table = 'guild'

    def __unicode__(self):
        return self.name


class Chars(models.Model):
    char_id = models.IntegerField(primary_key=True)
    account_id = models.IntegerField()
    char_num = models.IntegerField()
    name = models.CharField(max_length=50)
    class_id = models.IntegerField('Class', db_column='class')
    base_level = models.IntegerField()
    job_level = models.IntegerField()
    base_exp = models.IntegerField()
    job_exp = models.IntegerField()
    zeny = models.IntegerField()
    str_stat = models.IntegerField('str', db_column='str')
    agi = models.IntegerField()
    vit = models.IntegerField()
    int_stat = models.IntegerField('int', db_column='int')
    dex = models.IntegerField()
    luk = models.IntegerField()
    max_hp = models.IntegerField()
    hp = models.IntegerField()
    max_sp = models.IntegerField()
    sp = models.IntegerField()
    status_point = models.IntegerField()
    skill_point = models.IntegerField()
    option = models.IntegerField()
    karma = models.IntegerField()
    manner = models.IntegerField()
    party_id = models.IntegerField()
    guild_id = models.IntegerField()
    pet_id = models.IntegerField()
    homun_id = models.IntegerField()
    elemental_id = models.IntegerField()
    hair = models.IntegerField()
    hair_color = models.IntegerField()
    clothes_color = models.IntegerField()
    body = models.IntegerField()
    weapon = models.IntegerField()
    shield = models.IntegerField()
    head_top = models.IntegerField()
    head_mid = models.IntegerField()
    head_bottom = models.IntegerField()
    robe = models.IntegerField()
    last_map = models.CharField(max_length=50)
    last_x = models.IntegerField()
    last_y = models.IntegerField()
    save_map = models.CharField(max_length=50)
    save_x = models.IntegerField()
    save_y = models.IntegerField()
    partner_id = models.IntegerField()
    online = models.IntegerField()
    father = models.IntegerField()
    mother = models.IntegerField()
    child = models.IntegerField()
    fame = models.IntegerField()
    rename = models.IntegerField()
    delete_date = models.IntegerField()
    slotchange = models.IntegerField()
    char_opt = models.IntegerField()
    font = models.IntegerField()
    unban_time = models.IntegerField()
    uniqueitem_counter = models.IntegerField()
    sex = models.CharField(max_length=1)
    hotkey_rowshift = models.IntegerField()
    class_name = 'None'
    guild_name = 'None'

    class Meta:
        app_label = 'IdleRagnarok'
        db_table = 'char'

    def __unicode__(self):
        return self.name

